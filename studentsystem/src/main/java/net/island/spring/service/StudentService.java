package net.island.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.island.spring.entity.Student;
import net.island.spring.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getStudentList() {
		return studentRepository.findAll();
	}

	public Student addStudent(Student student) {
		return studentRepository.save(student);
	}

	public Student getStudent(long id) {
		return studentRepository.findById(id);
	}

	public Student updateStudent(Student student) {
		return studentRepository.save(student);
	}

	public void deleteStudent(long id) {
		studentRepository.deleteById(id);
	}
	
}
