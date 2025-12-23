import express, { Router } from "express";
import deviceRoutes from "./device.js";

const router = Router();

router.use("/uploads", express.static("uploads"));

router.use("/devices", deviceRoutes);

export default router;
