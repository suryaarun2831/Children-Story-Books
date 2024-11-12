// package com.example.backend.model;

// import java.util.List;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.JoinTable;
// import jakarta.persistence.ManyToMany;
// import jakarta.persistence.OneToOne;

// @Entity
// public class Cart {
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long cartId;

//     @OneToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     @ManyToMany(cascade = CascadeType.ALL)
//     @JoinTable(
//         name = "cart_stories",
//         joinColumns = @JoinColumn(name = "cart_id"),
//         inverseJoinColumns = @JoinColumn(name = "story_id")
//     )
//     private List<Stories> stories;

//     // Getters and Setters
//     public Long getCartId() {
//         return cartId;
//     }

//     public void setCartId(Long cartId) {
//         this.cartId = cartId;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }

//     public List<Stories> getStories() {
//         return stories;
//     }

//     public void setStories(List<Stories> stories) {
//         this.stories = stories;
//     }
// }
