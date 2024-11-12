// package com.example.backend.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.backend.model.Cart;
// import com.example.backend.service.CartService;

// @RestController
// @CrossOrigin
// @RequestMapping("/api/cart")
// public class CartController {

//     @Autowired
//     private CartService cartService;

//     @GetMapping("/{id}")
//     public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
//         Cart cart = cartService.getCartById(id);
//         return ResponseEntity.ok(cart);
//     }

//     @PostMapping("/{cartId}/add")
//     public ResponseEntity<Cart> addStoriesToCart(@PathVariable Long cartId, @RequestBody List<Long> storyIds) {
//         Cart updatedCart = cartService.addStoriesToCart(cartId, storyIds);
//         return ResponseEntity.ok(updatedCart);
//     }

//     @DeleteMapping("/{cartId}/remove/{storyId}")
//     public ResponseEntity<Cart> removeStoryFromCart(@PathVariable Long cartId, @PathVariable Long storyId) {
//         Cart updatedCart = cartService.removeStoryFromCart(cartId, storyId);
//         return ResponseEntity.ok(updatedCart);
//     }
// }
