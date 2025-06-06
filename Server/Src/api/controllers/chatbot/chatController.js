const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const Product = require("../../models/product");

const predefinedResponses = {
  Nutigo:
    "NutiGo là thương hiệu chuyên cung cấp các loại hạt dinh dưỡng sạch, hữu cơ, và chất lượng cao. Chúng tôi cam kết sử dụng nguyên liệu 100% hữu cơ, không chất bảo quản độc hại, và thực hành sản xuất bền vững.",
};

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Check for predefined keywords
    for (const keyword in predefinedResponses) {
      if (message.toLowerCase().includes(keyword.toLowerCase())) {
        return res.json({ reply: predefinedResponses[keyword] });
      }
    }

    if (message.toLowerCase().includes("tư vấn")) {
      const products = await Product.find({ deleted: false })
        .select("name price")
        .lean();

      if (products.length === 0) {
        return res.json({
          reply: "Xin lỗi, hiện tại chúng tôi không có sản phẩm nào để tư vấn.",
        });
      }

      // Format the product information into a response
      const productList = products
        .map((product) => `${product.name}: ${product.price} VND`)
        .join(", ");
      const reply = `Chúng tôi cung cấp các mặt hàng như: ${productList}. Bạn có thể xem chi tiết trên trang sản phẩm của chúng tôi.`;

      return res.json({ reply });
    }

    // nếu hỏi bình thường
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const response = await result.response;
    const aiReply = response.text();

    res.json({ reply: aiReply });
  } catch (error) {
    console.error(
      "Error in chatWithAI:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Failed to generate AI reply",
      details: error.response?.data || error.message,
    });
  }
};

module.exports = { chatWithAI };
