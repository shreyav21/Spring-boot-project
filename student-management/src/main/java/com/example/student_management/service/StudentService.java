package com.example.student_management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student_management.model.Student;
import com.example.student_management.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student addStudent(Student student) {
        return repo.save(student);
    }

    public Optional<Student> getStudentById(Long id) {
        return repo.findById(id);
    }

    public Student updateStudent(Long id, Student newData) {
        return repo.findById(id).map(student -> {
            student.setName(newData.getName());
            student.setEmail(newData.getEmail());
            student.setAge(newData.getAge());
            return repo.save(student);
        }).orElse(null);
    }

    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }
}
