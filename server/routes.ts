import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "admin@adfypro.com",
        subject: `Nuevo mensaje de contacto de ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              Nuevo Mensaje de Contacto - ADFYPRO
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Nombre:</strong> ${validatedData.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
              ${validatedData.phone ? `<p style="margin: 10px 0;"><strong>Teléfono:</strong> ${validatedData.phone}</p>` : ""}
            </div>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1f2937;">Mensaje:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
              <p>Este mensaje fue enviado desde el formulario de contacto de www.adfypro.com</p>
            </div>
          </div>
        `,
        replyTo: validatedData.email,
      };

      await transporter.sendMail(mailOptions);

      res.json({ success: true, message: "Mensaje enviado correctamente" });
    } catch (error) {
      console.error("Error sending contact email:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Datos de formulario no válidos",
          errors: error.errors 
        });
      }

      res.status(500).json({ 
        success: false, 
        message: "Error al enviar el mensaje. Por favor, inténtalo de nuevo." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
