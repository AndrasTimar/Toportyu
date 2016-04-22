package com.company;


import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    private Long id;
    private double cost;
    private String content;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "content")
    String getContent() {
        return content;
    }

    void setContent(String content) {
        this.content = content;
    }

    @Column(name = "cost")
    double getCost() {return cost;}
    public void setCost(double cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return String.format("Order: id: " + id + ", Content: " + content + ", Cost: " + cost);
    }

}