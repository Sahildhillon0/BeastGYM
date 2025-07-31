import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Users, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Get In Touch Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-orange-500 font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to start your fitness journey? Contact us today and take the first step towards a healthier you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Location Card */}
            <Card className="bg-gray-800 hover:scale-105  border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-green-600 font-bold">Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-white font-medium">BeastGYM</p>
                <p className="text-gray-300">Bhiwani, Haryana</p>
                <p className="text-gray-300">Near Bhagat Singh Chawk, Bhiwani</p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gray-800 border-gray-700 hover:scale-105 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-green-600 font-bold">Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-white font-medium">+91-9034764910</p>
                <p className="text-white font-medium">+91-9034292730</p>
                <p className="text-gray-300">24/7 Support Available</p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/30 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-green-600 font-bold">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-white font-medium">info@beastgym.com</p>
                <p className="text-white font-medium">support@beastgym.com</p>
                <p className="text-gray-300">Quick Response Guaranteed</p>
              </CardContent>
            </Card>
          </div>

          {/* Map Card */}
          <Card className="bg-gray-800 border-gray-700 mb-16">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Map */}
                <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d270.55738911305957!2d76.14448299283133!3d28.811793769832807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1753944451915!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BeastGYM Location"
                  ></iframe>
                </div>
                
                {/* Location Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Heart of the City</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Located in the vibrant heart of Bhiwani at Bhagat Singh Chawk, BeastGYM is strategically positioned 
                      for easy access from all parts of the city. Our prime location makes it convenient for everyone to reach us.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Surrounded by major landmarks and easily accessible via public transport, our gym is the perfect destination for your fitness journey.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-gray-300">Bhagat Singh Chawk</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-gray-300">Close to major landmarks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-gray-300">Easy parking available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-gray-300">Public transport accessible</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/trainers" className="text-gray-300 hover:text-white transition-colors">Trainers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Personal Training</span></li>
                <li><span className="text-gray-300">Fitness Assessment</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Membership</h3>
              <ul className="space-y-2">
                <li><Link href="/pricing-details" className="text-gray-300 hover:text-white transition-colors">Pricing Plans</Link></li>
                <li><span className="text-gray-300">1 day Free Trial</span></li>
               
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center hover:from-gray-300 hover:to-gray-500 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-pink-800" />
                </a>
                <a 
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center hover:from-gray-300 hover:to-gray-500 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-blue-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 BeastGYM. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
