package com.ad.adsoft.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ad.adsoft.model.User;
import com.ad.adsoft.repository.RegistrataionRepository;

@Service
public class RegistrataionService {

	@Autowired
	private RegistrataionRepository repository;

	public User saveUser(User user) {
		System.out.println("RegistrataionService -> saveUser ");
		return repository.save(user);

	}

	public User fetchUserByEmailId(String email) {
		return repository.findByEmailId(email);
	}

	public User fetchUserByEmailIdAndPassword(String email, String password) {
		System.out.println("RegistrataionService -> fetchUserByEmailIdAndPassword calling");
		return repository.findByEmailIdAndPassword(email, password);
	}
}
