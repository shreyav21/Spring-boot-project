package com.example.student_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private int age;

    //constructors
    public Student(){}

    public Student (String name,String email,int age){
        this.name = name;
        this.email = email;
        this.age = age;
    }


    //Getter and Setters
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public int getAge(){
        return age;
    }
    public void setAge(int age){
        this.age=age;
    }



    
}
