import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const services = [
    {
      icon: 'Truck',
      title: 'Наземная доставка',
      description: 'Быстрая и надежная доставка по всей России',
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
    {
      icon: 'Plane',
      title: 'Авиадоставка',
      description: 'Экспресс-доставка в любую точку мира',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500'
    },
    {
      icon: 'Ship',
      title: 'Морские перевозки',
      description: 'Крупногабаритные грузы по морским маршрутам',
      color: 'bg-gradient-to-r from-cyan-500 to-blue-500'
    },
    {
      icon: 'Package',
      title: 'Складские услуги',
      description: 'Современные склады с системой учета',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Быстрая доставка',
      description: 'От 24 часов по России'
    },
    {
      icon: 'Shield',
      title: 'Гарантия безопасности',
      description: 'Полное страхование грузов'
    },
    {
      icon: 'MapPin',
      title: 'Широкая география',
      description: '500+ городов доставки'
    },
    {
      icon: 'Users',
      title: 'Личный менеджер',
      description: 'Индивидуальный подход'
    }
  ];

  const tariffs = [
    {
      name: 'Стандарт',
      price: 'от 500₽',
      features: ['До 10 кг', '3-5 дней', 'Базовое страхование'],
      popular: false
    },
    {
      name: 'Экспресс',
      price: 'от 1200₽',
      features: ['До 30 кг', '1-2 дня', 'Полное страхование', 'SMS-уведомления'],
      popular: true
    },
    {
      name: 'Грузовой',
      price: 'от 2500₽',
      features: ['До 1000 кг', '2-7 дней', 'Упаковка', 'Погрузка/выгрузка'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Icon name="Truck" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">LogiPro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">Услуги</a>
            <a href="#advantages" className="text-gray-600 hover:text-orange-500 transition-colors">Преимущества</a>
            <a href="#geography" className="text-gray-600 hover:text-orange-500 transition-colors">География</a>
            <a href="#tariffs" className="text-gray-600 hover:text-orange-500 transition-colors">Тарифы</a>
            <a href="#contacts" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Заказать доставку
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  🚀 Быстрая логистика нового поколения
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Доставляем
                  <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent"> быстро</span> и
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> надежно</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Современная логистическая компания с системой отслеживания в реальном времени. 
                  Доставляем грузы по всему миру с гарантией качества.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Отследить груз</h3>
                <div className="flex space-x-3">
                  <Input
                    placeholder="Введите номер накладной"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-3">
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" className="text-lg px-8 py-3 border-2">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/81888871-d41d-49c6-8a31-99d21f0d9714.jpg" 
                  alt="Logistics" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-r from-orange-200 to-purple-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Полный спектр логистических услуг</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От экспресс-доставки до складских решений — все для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Преимущества</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Многолетний опыт и современные технологии на службе ваших потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name={advantage.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">География доставки</Badge>
              <h2 className="text-4xl font-bold text-gray-900">Доставляем по всему миру</h2>
              <p className="text-xl text-gray-600">
                Наша логистическая сеть охватывает более 150 стран мира. 
                Мы доставляем грузы любого размера в кратчайшие сроки.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-gray-600">Городов доставки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">150+</div>
                  <div className="text-gray-600">Стран мира</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-500">24/7</div>
                  <div className="text-gray-600">Поддержка клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">99%</div>
                  <div className="text-gray-600">Доставка в срок</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0af9c467-8eb1-4a5a-8f6e-b6313251fc18.jpg" 
                alt="World Map" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Тарифы</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Прозрачные цены</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф для ваших потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? 'border-orange-500 border-2 shadow-2xl scale-105' : 'border border-gray-200'} bg-white`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900">{tariff.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Icon name="Check" size={20} className="text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${tariff.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : 'bg-gray-900 hover:bg-gray-800'}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Контакты</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы ответить на все ваши вопросы и помочь с доставкой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 shadow-lg border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </Card>

            <Card className="text-center p-8 shadow-lg border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@logipro.ru</p>
            </Card>

            <Card className="text-center p-8 shadow-lg border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">Москва, ул. Логистическая, 1</p>
            </Card>

            <Card className="text-center p-8 shadow-lg border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-600">24/7 без выходных</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">LogiPro</span>
              </div>
              <p className="text-gray-400">
                Современная логистическая компания с системой отслеживания в реальном времени.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Наземная доставка</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Авиадоставка</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Морские перевозки</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Складские услуги</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Партнеры</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Отследить груз</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LogiPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;