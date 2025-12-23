import { z } from "zod";

// 设备相关验证模式
export const deviceSchemas = {
  queryAllDevice: z.object({
    token: z.string().length(32),
  }),

  // 创建设备请求体验证
  createDevice: z.object({
    id: z.uuid().toLowerCase(),
    name: z.string().min(1).max(100),
    wifi_mac: z.string().max(17),
    flash_size: z.number().positive(),
    ram_size: z.number().positive(),
    chip_id: z.string().min(1).max(100),
    reset_reason: z.string().min(1).max(100),
    idf_version: z.string().min(1).max(100),
    firmware_version: z.string(),
    manufacturer: z.string(),
    model: z.string(),
    description: z.string().max(500).optional().nullable(),
  }),

  // 创建记录
  createRecord: z.object({
    index: z.number().positive(),
    begin_time: z.number().positive(),
    duration_seconds: z.number().positive(),
    size_bytes: z.number().positive(),
    crc16: z.number().positive(),
  }),

  deviceRecordParam: z.object({
    device_id: z.uuid().toLowerCase(),
    record_index: z.string().min(1),
  }),
};

// 通用查询参数验证
export const commonSchemas = {
  // 分页查询参数
  pagination: z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    limit: z.coerce.number().int().min(1).max(100).optional().default(10),
    sort_by: z.string().optional(),
    sort_order: z.enum(["asc", "desc"]).optional().default("desc"),
  }),

  // 搜索查询参数
  search: z.object({
    q: z.string().min(1).max(100),
    limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  }),

  idParam: z.object({
    id: z.uuid().toLowerCase(),
  }),
};

// 导出所有模式
export const schemas = {
  device: deviceSchemas,
  common: commonSchemas,
};
