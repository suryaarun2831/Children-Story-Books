// package com.example.backend.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.backend.model.Stories;
// import com.example.backend.repository.StoryRepository;

// @Service
// public class StoryService {

//     @Autowired
//     private StoryRepository storyRepository;

//     // Fetch all stories
//     public List<Stories> getAllStories() {
//         return storyRepository.findAll();
//     }

//     // Fetch story by ID
//     public Optional<Stories> getStoryById(Long storyId) {
//         return storyRepository.findById(storyId);
//     }

//     // Fetch stories for children aged 3 to 8
//     public List<Stories> getStoriesForChildren3to8() {
//         return storyRepository.findByAgeBetween(3, 8);
//     }

//     // Fetch stories for children aged 8 to 15
//     public List<Stories> getStoriesForChildren8to15() {
//         return storyRepository.findByAgeBetween(8, 15);
//     }

//     // Fetch stories for age above 15
//     public List<Stories> getStoriesForAbove15() {
//         return storyRepository.findByAgeGreaterThanEqual(16);
//     }

//     // Save a new story
//     public Stories saveStory(Stories story) {
//         return storyRepository.save(story);
//     }

//     // Delete story by ID
//     public void deleteStory(Long storyId) {
//         storyRepository.deleteById(storyId);
//     }

//     // Update story by ID
//     public Stories updateStory(Long storyId, Stories storyDetails) {
//         Stories story = storyRepository.findById(storyId).orElseThrow(() -> new RuntimeException("Story not found"));

//         story.setTitle(storyDetails.getTitle());
//         story.setDescription(storyDetails.getDescription());
//         story.setImg(storyDetails.getImg());
//         story.setAge(storyDetails.getAge());

//         return storyRepository.save(story);
//     }
// }
