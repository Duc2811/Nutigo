import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_laqbptk",
        "template_h057pzr",
        form.current,
        "0mTxxxxxYOURPUBLICKEY"
      )
      .then(
        (result) => {
          alert("Gửi thành công!");
          form.current.reset();
        },
        (error) => {
          alert("Lỗi gửi: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-green-600 text-white text-center py-6 rounded-t-2xl">
        <h1 className="text-3xl font-bold">Liên Hệ Với Chúng Tôi</h1>
        <p className="mt-2">
          Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn về các sản phẩm chất lượng
          cao
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-between mt-6">
        {/* Phone */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center flex-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <PhoneOutlined style={{ fontSize: "24px", color: "#10b981" }} />
          </div>
          <h3 className="mt-4 font-semibold">Điện Thoại</h3>
          <p className="text-gray-600">Hotline bán hàng</p>
          <p className="text-lg font-bold text-gray-800">0123 456 789</p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center flex-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <MailOutlined style={{ fontSize: "24px", color: "#10b981" }} />
          </div>
          <h3 className="mt-4 font-semibold">Email</h3>
          <p className="text-gray-600">Liên hệ trực tuyến</p>
          <p className="text-lg font-bold text-gray-800">
            contact@hatgiong.com
          </p>
        </div>

        {/* Giờ Làm Việc */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center flex-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <ClockCircleOutlined
              style={{ fontSize: "24px", color: "#10b981" }}
            />
          </div>
          <h3 className="mt-4 font-semibold">Giờ Làm Việc</h3>
          <p className="text-gray-600">Thứ 2 - Chủ nhật</p>
          <p className="text-lg font-bold text-gray-800">8:00 - 18:00</p>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Form */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Gửi Tin Nhắn</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Họ và tên *</label>
              <input
                type="text"
                name="user_name"
                placeholder="Nhập họ và tên của bạn"
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Số điện thoại *
              </label>
              <input
                type="text"
                name="user_phone"
                placeholder="Nhập số điện thoại"
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="user_email"
                placeholder="Nhập địa chỉ email của bạn"
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Chủ đề</label>
              <input
                type="text"
                name="subject"
                placeholder="Tư vấn sản phẩm, bảo hành..."
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Nội dung tin nhắn *
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Nhập nội dung tin nhắn của bạn..."
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>

        {/* Map and Info */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Địa Chỉ Cửa Hàng</h2>
          <p className="text-lg font-semibold text-gray-800">
            Cửa Hàng Hạt Giống Chất Lượng
          </p>
          <p className="text-gray-600 mt-1">
            123 Đường Nguyễn Văn A, Phường 1, Quận Bình Thạnh, TP. Hồ Chí Minh
          </p>
          <p className="text-gray-700 mt-4 font-semibold">Thông tin thêm:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Chuyên cung cấp hạt giống chất lượng cao</li>
            <li>Tư vấn kỹ thuật miễn phí</li>
            <li>Giao hàng toàn quốc</li>
            <li>Bảo hành lâu dài các sản phẩm</li>
          </ul>
          <div className="mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              Xem bản đồ lớn hơn
            </a>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.7... (thay link thật)"
            className="w-full h-64 mt-4 rounded"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
