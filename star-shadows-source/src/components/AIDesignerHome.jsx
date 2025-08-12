import React, { useState } from 'react';
import './AIDesignerHome.css';

const AIDesignerHome = () => {
  const [activeTab, setActiveTab] = useState('clothing');
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = {
    clothing: {
      title: 'AI服装设计',
      description: '利用人工智能技术，为您提供专业的服装设计服务',
      items: ['时尚趋势分析', '个性化定制', '3D建模预览', '面料推荐']
    },
    jewelry: {
      title: 'AI珠宝设计', 
      description: '创新珠宝设计，融合传统工艺与现代科技',
      items: ['宝石搭配', '造型设计', '工艺优化', '价值评估']
    },
    makeup: {
      title: 'AI美妆设计',
      description: '智能美妆方案，打造独一无二的时尚作品',
      items: ['色彩搭配', '妆容设计', '产品推荐', '效果预览']
    }
  };

  const slides = [
    {
      id: 1,
      title: 'AI服装设计',
      description: '智能分析时尚趋势，为您定制专属服装设计方案',
      image: '/AI服装.png',
      category: 'clothing'
    },
    {
      id: 2,
      title: 'AI珠宝设计',
      description: '运用AI算法生成独特珠宝设计，结合传统工艺与现代美学',
      image: '/AI珠宝.png',
      category: 'jewelry'
    },
    {
      id: 3,
      title: 'AI美妆设计',
      description: '基于面部特征分析，提供个性化美妆方案',
      image: '/AI美妆.png',
      category: 'makeup'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="ai-designer-home">
      <style jsx>{`
        .ai-designer-home {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #334155;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo a {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-subtitle {
          font-size: 0.875rem;
          font-weight: 400;
          color: #94a3b8;
          margin-left: 0.5rem;
        }

        .nav-menu ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .nav-menu a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-menu a:hover {
          color: #a855f7;
        }

        .user-actions {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .btn:first-child {
          color: #d1d5db;
          border-color: #374151;
          background: transparent;
        }

        .btn:first-child:hover {
          background: #374151;
          color: white;
        }

        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .main-content {
          padding: 0 2rem;
        }

        .hero-section {
          display: flex;
          align-items: center;
          min-height: 80vh;
          padding: 2rem 0;
          gap: 4rem;
        }

        .hero-content {
          flex: 1;
          max-width: 500px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-hero.btn-primary {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
        }

        .btn-hero.btn-primary:hover {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }

        .btn-hero.btn-secondary {
          background: transparent;
          color: #d1d5db;
          border: 2px solid #374151;
        }

        .btn-hero.btn-secondary:hover {
          background: #374151;
          border-color: #6b7280;
          transform: translateY(-2px);
        }

        .hero-carousel {
          flex: 1;
          position: relative;
          max-width: 600px;
          height: 500px;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 1rem;
          border: 1px solid #374151;
        }

        .carousel-wrapper {
          display: flex;
          width: 300%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          width: 33.333%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .slide-image {
          flex: 1;
          overflow: hidden;
        }

        .slide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .carousel-slide:hover .slide-image img {
          transform: scale(1.05);
        }

        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 3rem 2rem 2rem;
          color: white;
        }

        .slide-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-content p {
          font-size: 0.9rem;
          line-height: 1.4;
          color: #d1d5db;
          margin-bottom: 1rem;
        }

        .slide-btn {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slide-btn:hover {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .carousel-btn:hover {
          background: rgba(139, 92, 246, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn-prev {
          left: 1rem;
        }

        .carousel-btn-next {
          right: 1rem;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #a855f7;
          transform: scale(1.2);
        }

        .indicator:hover {
          background: rgba(255,255,255,0.8);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(139,92,246,0.3));
          border-radius: 1rem;
          display: flex;
          align-items: flex-end;
          padding: 2rem;
        }

        .overlay-content {
          width: 100%;
        }

        .category-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: rgba(139, 92, 246, 0.8);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .inspiration-note {
          margin-bottom: 1rem;
        }

        .inspiration-note h4 {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .inspiration-note p {
          color: #d1d5db;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .preview-gallery {
          display: flex;
          gap: 0.5rem;
        }

        .preview-item {
          width: 60px;
          height: 60px;
          border-radius: 0.5rem;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .editors-pick-section,
        .hot-pick-section {
          padding: 4rem 0;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .view-more {
          color: #a855f7;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .view-more:hover {
          color: #8b5cf6;
        }

        .editors-pick-grid,
        .hot-pick-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1rem;
          height: 500px;
        }

        .pick-card,
        .hot-card {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          background: #1e293b;
          border: 1px solid #334155;
          transition: transform 0.3s ease;
        }

        .pick-card:hover,
        .hot-card:hover {
          transform: translateY(-4px);
        }

        .pick-card.large,
        .hot-card.large {
          grid-row: 1 / 3;
        }

        .card-image {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 1.5rem;
          color: white;
        }

        .card-overlay h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-overlay p {
          color: #d1d5db;
          font-size: 0.875rem;
        }

        .start-creating-card {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: none;
          transition: transform 0.3s ease;
        }

        .start-creating-card:hover {
          transform: translateY(-4px);
        }

        .start-creating-card.green {
          background: linear-gradient(135deg, #059669, #10b981);
        }

        .creating-content {
          text-align: center;
          color: white;
        }

        .creating-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .creating-content p {
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .btn-start-creating {
          background: rgba(255,255,255,0.2);
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-start-creating:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .editors-pick-grid,
          .hot-pick-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            height: auto;
          }

          .pick-card.large,
          .hot-card.large {
            grid-row: auto;
          }
        }
      `}</style>

      {/* 顶部导航栏 */}
      <header className="header">
        <div className="logo">
          <a href="#">Star Shadows<span className="logo-subtitle">(星流图影)</span></a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#" onClick={() => setActiveTab('clothing')}>AI服装</a></li>
            <li><a href="#" onClick={() => setActiveTab('jewelry')}>AI珠宝</a></li>
            <li><a href="#" onClick={() => setActiveTab('makeup')}>AI美妆</a></li>
            <li><a href="#">作品广场</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <a href="#" className="btn">登录</a>
          <a href="#" className="btn btn-primary">注册</a>
        </div>
      </header>

      {/* 主内容区域 */}
      <main className="main-content">
        {/* 英雄区域 */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Star<br />
              Shadows<br />
              AI设计师。
            </h1>
            <p className="hero-subtitle">
              利用人工智能技术，为您提供专业的服装、珠宝、美妆设计服务。<br />
              让创意与科技完美融合，打造独一无二的时尚作品。
            </p>
            <div className="hero-buttons">
              <button className="btn-hero btn-primary">开始设计</button>
              <button className="btn-hero btn-secondary">查看作品</button>
            </div>
          </div>
          
          {/* 图片轮播区域 */}
          <div className="hero-carousel">
            <div className="carousel-container">
              <div className="carousel-wrapper" style={{transform: `translateX(-${currentSlide * 33.333}%)`}}>
                {slides.map((slide, index) => (
                  <div key={slide.id} className="carousel-slide">
                    <div className="slide-image">
                      <img src={slide.image} alt={slide.title} />
                    </div>
                    <div className="slide-content">
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                      <button 
                        className="slide-btn"
                        onClick={() => setActiveTab(slide.category)}
                      >
                        了解更多
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 轮播控制按钮 */}
              <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                &#8249;
              </button>
              <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                &#8250;
              </button>
              
              {/* 轮播指示器 */}
              <div className="carousel-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 编辑推荐区域 */}
        <section className="editors-pick-section">
          <div className="section-header">
            <h2 className="section-title">编辑推荐 Editor's Pick</h2>
            <a href="#" className="view-more">查看更多</a>
          </div>
          <div className="editors-pick-grid">
            <div className="pick-card large">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=ethereal%20white%20flowing%20dress%20fashion%20design%2C%20minimalist%20elegant%20style%2C%20studio%20lighting&image_size=portrait_4_3" alt="优雅白裙" />
              </div>
              <div className="card-overlay">
                <h3>优雅流线设计</h3>
                <p>极简主义风格</p>
              </div>
            </div>
            <div className="pick-card">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20sunglasses%20fashion%20accessory%2C%20sleek%20modern%20design%2C%20dark%20background&image_size=square" alt="未来眼镜" />
              </div>
              <div className="card-overlay">
                <h3>未来科技眼镜</h3>
                <p>前卫设计</p>
              </div>
            </div>
            <div className="pick-card">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20brown%20fashion%20coat%2C%20textured%20fabric%2C%20high%20fashion%20photography&image_size=square" alt="奢华外套" />
              </div>
              <div className="card-overlay">
                <h3>奢华质感外套</h3>
                <p>高级定制</p>
              </div>
            </div>
            <div className="pick-card">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20white%20wedding%20dress%2C%20romantic%20design%2C%20soft%20lighting&image_size=square" alt="婚纱设计" />
              </div>
              <div className="card-overlay">
                <h3>浪漫婚纱</h3>
                <p>梦幻设计</p>
              </div>
            </div>
            <div className="start-creating-card">
              <div className="creating-content">
                <h3>Start Creating</h3>
                <p>开始您的创作之旅</p>
                <button className="btn-start-creating">立即开始</button>
              </div>
            </div>
          </div>
        </section>

        {/* 热门作品区域 */}
        <section className="hot-pick-section">
          <div className="section-header">
            <h2 className="section-title">热门作品 Hot Pick</h2>
            <a href="#" className="view-more">查看更多</a>
          </div>
          <div className="hot-pick-grid">
            <div className="hot-card large">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20sci-fi%20cityscape%20architecture%2C%20cyberpunk%20style%2C%20neon%20lights%2C%20dark%20atmosphere&image_size=landscape_16_9" alt="未来城市" />
              </div>
              <div className="card-overlay">
                <h3>未来城市概念</h3>
                <p>科幻建筑设计</p>
              </div>
            </div>
            <div className="hot-card">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20black%20high%20heel%20shoes%2C%20elegant%20design%2C%20fashion%20photography&image_size=square" alt="奢华高跟鞋" />
              </div>
              <div className="card-overlay">
                <h3>奢华高跟鞋</h3>
                <p>经典设计</p>
              </div>
            </div>
            <div className="hot-card">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20leather%20handbag%2C%20brown%20texture%2C%20high%20fashion%20accessory&image_size=square" alt="奢华手袋" />
              </div>
              <div className="card-overlay">
                <h3>奢华皮革手袋</h3>
                <p>精工制作</p>
              </div>
            </div>
            <div className="hot-card">
              <div className="card-image">
                <img src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20sneakers%20design%2C%20modern%20athletic%20shoes%2C%20premium%20materials&image_size=square" alt="运动鞋设计" />
              </div>
              <div className="card-overlay">
                <h3>潮流运动鞋</h3>
                <p>运动时尚</p>
              </div>
            </div>
            <div className="start-creating-card green">
              <div className="creating-content">
                <h3>Start Creating</h3>
                <p>探索更多可能性</p>
                <button className="btn-start-creating">开始创作</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIDesignerHome;