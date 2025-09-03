🛒 NxtTrendz – Online Shopping App (React JS)

Description:
Developed a fully functional e-commerce web application featuring secure authentication, dynamic product listings, real-time filtering, and cart management using React.js, REST APIs, and Context API.

🔑 Login Credentials

    Username: rahul
    
    Password: rahul@2021

🚀 Key Features
🔐 Authentication & Route Protection

    Implemented JWT token–based authentication for secure login.
    
    Protected routes for Products, Cart, and Product Details, accessible only to authenticated users.

📦 Products Listing Page

    Integrated GET API requests with query parameters for search, category, and rating filters.
    
    Handled multiple states: Loader, Success, Empty, and Failure views.
    
    Supported multi-filter combinations with a Clear Filters option.

🔍 Search & Filter Functionality

    Real-time product filtering via:
    
    Search bar (trigger on Enter key).
    
    Category selection.
    
    Rating selection.
    
    Dynamically updated product list based on selected filters.

📄 Product Details Page

    Fetched product details & similar products via API (with JWT token + Product ID).
    
    Added quantity management (increment/decrement, default = 1).
    
    Redirected unauthenticated users to the Login Page.

🛒 Cart Functionality (Context API)

    Add to Cart with duplicate prevention (quantity updated instead).
    
    Quantity management: increase, decrease, remove item.
    
    Remove All option to clear cart instantly.
    
    Real-time cart summary & total cost calculation.
    
    Displayed Empty Cart view when applicable.

🌐 Tech Stack

    Frontend: React JS, React Router, Context API, CSS
    
    Backend APIs: REST API with JWT Authentication
