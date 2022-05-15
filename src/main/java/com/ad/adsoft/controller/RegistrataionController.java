/**
 * 
 */
package com.ad.adsoft.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ad.adsoft.model.User;
import com.ad.adsoft.repository.UserRepository;
import com.ad.adsoft.service.RegistrataionService;

/**
 * @author admin
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/v1")
public class RegistrataionController {

	private final static Logger log = LoggerFactory.getLogger(RegistrataionController.class);

	@Autowired
	private RegistrataionService service;
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/register")
	public User registerUser(@RequestBody User user) throws Exception {
		log.info("RegistrataionController -> registerUser method calling ");
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userObject = service.fetchUserByEmailId(tempEmailId);
			if (userObject != null) {
				throw new Exception("user with " + tempEmailId + " is already exist");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;

	}

	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		log.info("RegistrataionController -> loginUser method calling ");
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User userObj = null;
		if (tempEmailId != null && tempPass != null) {
			userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if (userObj == null) {
			throw new Exception("Bad Credentials");
		}
		return userObj;
	}

	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
		log.info("RegistrataionController -> inside getAllUsers method");
		return userRepository.findAll();
	}

}