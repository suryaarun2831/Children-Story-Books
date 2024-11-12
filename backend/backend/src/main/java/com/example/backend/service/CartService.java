// package com.example.backend.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.backend.model.Cart;
// import com.example.backend.model.Stories;
// import com.example.backend.repository.CartRepository;
// import com.example.backend.repository.StoryRepository;

// @Service
// public class CartService {

//     @Autowired
//     private CartRepository cartRepository;

//     @Autowired
//     private StoryRepository storyRepository;

//     // Save cart
//     public Cart saveCart(Cart cart) {
//         return cartRepository.save(cart);
//     }

//     // Get cart by ID
//     public Cart getCartById(Long id) {
//         return cartRepository.findById(id).orElseThrow(() -> new RuntimeException("Cart not found"));
//     }

//     // Get all carts
//     public List<Cart> getAllCarts() {
//         return cartRepository.findAll();
//     }

//     // Delete cart by ID
//     public void deleteCart(Long id) {
//         cartRepository.deleteById(id);
//     }

//     // Add stories to cart
//     public Cart addStoriesToCart(Long cartId, List<Long> storyIds) {
//         Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));

//         // Fetch stories by IDs
//         List<Stories> stories = storyRepository.findAllById(storyIds);

//         // Add stories to the cart
//         cart.getStories().addAll(stories);
//         return cartRepository.save(cart);
//     }

//     // Remove a story from cart
//     public Cart removeStoryFromCart(Long cartId, Long storyId) {
//         Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
        
//         // Remove story from cart's story list
//         cart.getStories().removeIf(story -> story.getStoryId().equals(storyId));
        
//         return cartRepository.save(cart);
//     }
// }
