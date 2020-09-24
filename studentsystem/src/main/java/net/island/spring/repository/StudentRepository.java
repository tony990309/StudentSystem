package net.island.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.island.spring.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

	Student findById(long id);
	
}
