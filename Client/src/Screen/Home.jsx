import { Layout, Typography, Row, Col, Carousel, Card, Space, Button, Statistic, Divider } from "antd";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  ShoppingCartOutlined, 
  StarOutlined, 
  FireOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  TeamOutlined
} from '@ant-design/icons';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SidebarMenuAntd from "../Component/SidebarMenu";
import FeaturedProducts from "../Component/FearturedProducts";
import SaleProducts from "../Component/SaleProducts";
import TopSoldProducts from "../Component/TopSoldProducts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BottomAds from "../Component/BottomAds";
import LeftAdsBanner from "../Component/LeftAds";
import RightAdsBanner from "../Component/RightAds";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const isDarkMode = useSelector((state) => state.user.darkMode);
  const { t } = useTranslation("home");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: <RocketOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: 'Fast Delivery',
      description: 'Get your products delivered within 24 hours'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption'
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: '32px', color: '#722ed1' }} />,
      title: '24/7 Support',
      description: 'Round the clock customer support'
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '32px', color: '#fa8c16' }} />,
      title: 'Worldwide Shipping',
      description: 'We ship to over 100 countries'
    }
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Regular Customer',
      content: 'Amazing products and excellent service. Will definitely shop again!',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Premium Member',
      content: 'The quality of products is outstanding. Very satisfied with my purchase.',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Business Owner',
      content: 'Great prices and fast delivery. Perfect for my business needs.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#21252b" : "#f4f6f9",
        color: isDarkMode ? "#e6edf3" : "#1c1e21",
        transition: "all 0.3s ease",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <Content
        style={{
          padding: "60px 20px",
          maxWidth: "1400px",
          margin: "auto",
          backgroundColor: isDarkMode ? "rgba(33, 37, 43, 0.9)" : "#fff",
          borderRadius: isDarkMode ? "10px" : "0",
          boxShadow: isDarkMode ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >


        {/* Main Content */}
        <Row gutter={[24, 24]} style={{ paddingTop: "30px" }}>
          <Col xs={24} sm={4}>
            <motion.div {...fadeIn}>
              <SidebarMenuAntd />
            </motion.div>
          </Col>
          <Col xs={24} sm={20}>
            <motion.div {...fadeIn}>
              <Carousel
                autoplay
                autoplaySpeed={5000}
                effect="fade"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  height: "500px",
                  position: "relative",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div>
                  <img
                    src="https://file.hstatic.net/200000722513/file/thang_01_laptop_gaming_banner_web_slider_800x400.png"
                    style={{ 
                      width: "100%", 
                      height: "500px", 
                      objectFit: "cover",
                      filter: isDarkMode ? "brightness(0.8)" : "none"
                    }}
                  />
                </div>
                <div>
                  <img
                    src="https://file.hstatic.net/200000722513/file/banner_web_slider_800x400_1199a3adfc23489798d4163a97f3bc62.jpg"
                    style={{ 
                      width: "100%", 
                      height: "500px", 
                      objectFit: "cover",
                      filter: isDarkMode ? "brightness(0.8)" : "none"
                    }}
                  />
                </div>
              </Carousel>
            </motion.div>
          </Col>
        </Row>

        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <motion.div {...fadeIn}>
            <Card
              title={
                <Space>
                  <StarOutlined style={{ color: "#ffd700" }} />
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>Featured Products</span>
                </Space>
              }
              bordered={false}
              style={{
                backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <FeaturedProducts isDarkMode={isDarkMode} />
            </Card>
          </motion.div>

          <Divider style={{ 
            margin: '40px 0',
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            borderWidth: '2px'
          }} />

          <motion.div {...fadeIn}>
            <Card
              title={
                <Space>
                  <FireOutlined style={{ color: "#ff4d4f" }} />
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>Top Selling Products</span>
                </Space>
              }
              bordered={false}
              style={{
                backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <TopSoldProducts isDarkMode={isDarkMode} />
            </Card>
          </motion.div>

          <Divider style={{ 
            margin: '40px 0',
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            borderWidth: '2px'
          }} />

          <motion.div {...fadeIn}>
            <Card
              title={
                <Space>
                  <ShoppingCartOutlined style={{ color: "#52c41a" }} />
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>Sale Products</span>
                </Space>
              }
              bordered={false}
              style={{
                backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <SaleProducts isDarkMode={isDarkMode} />
            </Card>
          </motion.div>
        </Space>

        {/* Testimonials Section */}
        <motion.div {...fadeIn}>
          <div style={{ marginTop: '60px', marginBottom: '40px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
              What Our Customers Say
            </Title>
            <Row gutter={[24, 24]}>
              {testimonials.map((testimonial, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    bordered={false}
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#fff',
                      borderRadius: '15px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      height: '100%'
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          marginBottom: '16px'
                        }}
                      />
                      <Paragraph style={{ 
                        fontSize: '1.1rem',
                        fontStyle: 'italic',
                        marginBottom: '16px'
                      }}>
                        &ldquo;{testimonial.content}&rdquo;
                      </Paragraph>
                      <Title level={4} style={{ margin: 0 }}>{testimonial.name}</Title>
                      <Text type="secondary">{testimonial.role}</Text>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div {...fadeIn}>
          <Card
            bordered={false}
            style={{
              background: isDarkMode ? 'linear-gradient(45deg, #1a1a1a, #2d2d2d)' : 'linear-gradient(45deg, #1890ff, #722ed1)',
              borderRadius: '15px',
              marginTop: '40px',
              marginBottom: '40px',
              color: '#fff'
            }}
          >
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <ThunderboltOutlined style={{ fontSize: '48px', marginBottom: '20px' }} />
              <Title level={3} style={{ color: '#fff', marginBottom: '20px' }}>
                Subscribe to Our Newsletter
              </Title>
              <Paragraph style={{ color: '#fff', marginBottom: '30px' }}>
                Get the latest updates on new products and special promotions
              </Paragraph>
              <Space.Compact style={{ width: '100%', maxWidth: '500px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px 0 0 5px',
                    width: '100%',
                    fontSize: '16px'
                  }}
                />
                <Button type="primary" size="large" style={{ borderRadius: '0 5px 5px 0' }}>
                  Subscribe
                </Button>
              </Space.Compact>
            </div>
          </Card>
        </motion.div>
      </Content>
      <Footer />
      <BottomAds />
      <LeftAdsBanner />
      <RightAdsBanner />
    </Layout>
  );
};

export default Home;
