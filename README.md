🛒 NxtTrendz – Online Shopping App (React JS)
Description: Developed a fully functional e-commerce application with secure authentication, dynamic product listings, filtering, and cart management using React.js, REST APIs, and Context API.

Key Features:

🔐 Authentication & Route Protection: -Implemented secure login with JWT token authentication. -Protected routes for Products, Cart, and Product Details accessible only by authenticated users.

📦 Products Listing Page:

-Fetched product data using GET API requests with query parameters for search, category, and rating filters. -Displayed loader during data fetch and appropriate views for empty, success, or failure responses. -Handled multiple filters simultaneously and provided a "Clear Filters" feature to reset filters.

🔍 Search and Filter Functionality: Enabled real-time filtering using: -Product title (Search bar with Enter key trigger) -Category selection -Rating selection -Dynamically updated product list based on selected filters.

📄 Product Details Page: -Fetched individual product details and similar products using API with JWT token and product ID. -Displayed product quantity controls with increment/decrement buttons and default value set to 1. -Navigated to login route if accessed by unauthenticated users.

🛒 Cart Functionality using Context API: -Added product items to cart with quantity management (increase, decrease, remove). -Prevented duplicate items and updated quantity instead. -Real-time total cost and cart summary calculation. Features include: -Remove single item -Remove all items -Display empty cart view when applicable

🌐 Tech Stack Used: -React JS, React Router, Context API, REST API, JWT Authentication, CSS
