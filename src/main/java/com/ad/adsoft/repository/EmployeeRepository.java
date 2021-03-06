package com.ad.adsoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ad.adsoft.model.Employee;

/**
 * @author admin
 *
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
