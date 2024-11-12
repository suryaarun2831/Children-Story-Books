// package com.example.backend.model;

// import java.util.List;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.ManyToMany;

// @Entity
// public class Stories {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long storyId;

//     private String title;
//     private String description;
//     private String img;
//     private int age;

//     @ManyToMany(mappedBy = "stories", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
//     private List<Cart> carts;

//     // Getters and Setters
//     public Long getStoryId() {
//         return storyId;
//     }

//     public void setStoryId(Long storyId) {
//         this.storyId = storyId;
//     }

//     public String getTitle() {
//         return title;
//     }

//     public void setTitle(String title) {
//         this.title = title;
//     }

//     public String getDescription() {
//         return description;
//     }

//     public void setDescription(String description) {
//         this.description = description;
//     }

//     public String getImg() {
//         return img;
//     }

//     public void setImg(String img) {
//         this.img = img;
//     }

//     public int getAge() {
//         return age;
//     }

//     public void setAge(int age) {
//         this.age = age;
//     }

//     public List<Cart> getCarts() {
//         return carts;
//     }

//     public void setCarts(List<Cart> carts) {
//         this.carts = carts;
//     }
// }
