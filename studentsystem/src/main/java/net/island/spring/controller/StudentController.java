package net.island.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.island.spring.entity.Student;
import net.island.spring.service.StudentService;

@RestController
@CrossOrigin("*")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@GetMapping("/student")
	public List<Student> getStudentList() {
		return studentService.getStudentList();
	}
	
	@PostMapping("/student/add")
	public Student addStudent(Student student) {
		return studentService.addStudent(student);
	}
	
	@GetMapping("/student/load/{id}")
	public Student getStudent(@PathVariable long id) {
		return studentService.getStudent(id);
	}
	
	@PutMapping("/student/update")
	public Student updateStudent(Student student) {
		return studentService.updateStudent(student);
	}
	
	@DeleteMapping("/student")
	public void deleteStudent(@RequestParam long id) {
		studentService.deleteStudent(id);
	}
	
}
