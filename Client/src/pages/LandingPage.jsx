import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button, Typography, Row, Col, Card } from 'antd';
import { Container } from 'react-bootstrap';
import { ArrowRightOutlined, ShoppingOutlined, RocketOutlined, SafetyOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './LandingPage.css';
import Header from '../Screen/layout/Header';
import Footer from '../Screen/layout/Footer';

const { Title, Paragraph } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero-section" style={{ 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          color: 'white',
          padding: '100px 0',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Container>
            <Row align="middle" gutter={[32, 32]}>
              <Col xs={24} md={12}>
                <AnimatedSection>
                  <Title level={1} style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                    Welcome to LShop
                  </Title>
                  <Paragraph style={{ fontSize: '1.2rem', color: '#e0e0e0', marginBottom: '2rem' }}>
                    Your one-stop destination for all your shopping needs. Discover amazing products and exclusive deals.
                  </Paragraph>
                  <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                    Get Started
                  </Button>
                </AnimatedSection>
              </Col>
              <Col xs={24} md={12}>
                <AnimatedSection delay={0.2}>
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img 
                      src="https://placehold.co/600x400" 
                      alt="Hero" 
                      style={{ 
                        width: '100%', 
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                      }} 
                    />
                  </motion.div>
                </AnimatedSection>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section style={{ padding: '100px 0', background: '#f8f9fa' }}>
          <Container>
            <AnimatedSection>
              <Title level={2} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Why Choose Us
              </Title>
            </AnimatedSection>
            <Row gutter={[32, 32]}>
              {[
                {
                  icon: <ShoppingOutlined style={{ fontSize: '2.5rem', color: '#1890ff' }} />,
                  title: 'Wide Selection',
                  description: 'Browse through thousands of products from trusted sellers.'
                },
                {
                  icon: <RocketOutlined style={{ fontSize: '2.5rem', color: '#1890ff' }} />,
                  title: 'Fast Delivery',
                  description: 'Get your orders delivered quickly and efficiently.'
                },
                {
                  icon: <SafetyOutlined style={{ fontSize: '2.5rem', color: '#1890ff' }} />,
                  title: 'Secure Shopping',
                  description: 'Shop with confidence with our secure payment system.'
                }
              ].map((feature, index) => (
                <Col xs={24} md={8} key={index}>
                  <AnimatedSection delay={0.2 * index}>
                    <Card 
                      hoverable 
                      style={{ 
                        textAlign: 'center',
                        height: '100%',
                        borderRadius: '15px'
                      }}
                    >
                      <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
                      <Title level={4}>{feature.title}</Title>
                      <Paragraph>{feature.description}</Paragraph>
                    </Card>
                  </AnimatedSection>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '100px 0',
          background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
          color: 'white'
        }}>
          <Container>
            <AnimatedSection>
              <Row justify="center" align="middle">
                <Col xs={24} md={16} style={{ textAlign: 'center' }}>
                  <Title level={2} style={{ color: 'white', marginBottom: '1.5rem' }}>
                    Ready to Start Shopping?
                  </Title>
                  <Paragraph style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Join thousands of satisfied customers and start your shopping journey today.
                  </Paragraph>
                  <Button type="primary" size="large" ghost>
                    Sign Up Now
                  </Button>
                </Col>
              </Row>
            </AnimatedSection>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage; 