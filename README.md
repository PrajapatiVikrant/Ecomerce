# Watch Store Frontend

A modern, responsive **e-commerce frontend** built with **Next.js**, **React**, and **Tailwind CSS**, designed for the **Watch Store** platform.  
This project connects to the **Watch Store Backend** (Node.js + MongoDB) to provide a seamless shopping experience with **authentication**, **cart management**, **product browsing**, and **Razorpay payments**.

---

## 🌐 Live Demo

🚀 **Deployed at:** [https://ecomerce-blue-two.vercel.app/](https://ecomerce-blue-two.vercel.app/)

---

## 🚀 Features

- **Home Page**
  - Hero banner and introduction section  
  - Quick access to featured products  

- **Authentication**
  - Login and Signup with JWT integration  
  - Protected routes for user-specific data  

- **Product Listing**
  - Browse watches by **gender**, **type**, and **category**  
  - Dynamic routing for product details  
  - Real-time data fetching from backend API  

- **Cart System**
  - Add, update, and remove items  
  - Persistent cart for logged-in users  
  - Dynamic total price calculation  

- **Order and Payment**
  - Secure Razorpay payment gateway integration  
  - Order confirmation and success page  

- **Responsive Design**
  - Fully optimized for desktop, tablet, and mobile screens  

---

## 🛠️ Tech Stack

- **Framework:** Next.js  
- **Frontend Library:** React.js  
- **Styling:** Tailwind CSS  
- **State Management:** Redux Toolkit  
- **Routing:** Next.js App Router  
- **API Integration:** Axios / Fetch API  
- **Authentication:** JWT (from backend)  
- **Payment Gateway:** Razorpay  

---

## ⚙️ Installation and Setup

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/prajapativikrant/Ecomerce.git
cd Ecomerce

# 2. Install dependencies
npm install

# 3. Create a .env.local file and add the following:
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=<Your Razorpay Key ID>

# 4. Run the development server
npm run dev

```
