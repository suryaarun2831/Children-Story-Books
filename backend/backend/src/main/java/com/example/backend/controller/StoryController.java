// package com.example.backend.controller;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.backend.model.Stories;
// import com.example.backend.service.StoryService;

// @RestController
// @CrossOrigin
// @RequestMapping("/api/stories")
// public class StoryController {

//     @Autowired
//     private StoryService storyService;

//     @GetMapping
//     public List<Stories> getAllStories() {
//         return storyService.getAllStories();
//     }

//     @GetMapping("/age/3-8")
//     public List<Stories> getStoriesForChildren3to8() {
//         return storyService.getStoriesForChildren3to8();
//     }

//     @GetMapping("/age/8-15")
//     public List<Stories> getStoriesForChildren8to15() {
//         return storyService.getStoriesForChildren8to15();
//     }

//     @GetMapping("/age/15+")
//     public List<Stories> getStoriesForAbove15() {
//         return storyService.getStoriesForAbove15();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Stories> getStoryById(@PathVariable Long id) {
//         Optional<Stories> story = storyService.getStoryById(id);
//         return story.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     public ResponseEntity<Stories> createStory(@RequestBody Stories story) {
//         Stories createdStory = storyService.saveStory(story);
//         return ResponseEntity.ok(createdStory);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Stories> updateStory(@PathVariable Long id, @RequestBody Stories storyDetails) {
//         try {
//             Stories updatedStory = storyService.updateStory(id, storyDetails);
//             return ResponseEntity.ok(updatedStory);
//         } catch (RuntimeException e) {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteStory(@PathVariable Long id) {
//         storyService.deleteStory(id);
//         return ResponseEntity.noContent().build();
//     }
// }
