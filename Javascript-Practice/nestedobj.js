let student = {
  name: "Alice",
  grade: 12,
  subjects: {
    math: "A",
    science: "B"
  }
};
console.log(student.subjects.math);


let company = {
  name: "TechCorp",
  location: "San Francisco",
  departments: {
    engineering: {
      head: "John Doe",
      employees: 50
    },
    marketing: {
      head: "Jane Smith",
      employees: 30
    }
  }
};

console.log(company.departments.engineering.head);  
console.log(company.departments.marketing.employees); 



let library = {
  name: "City Library",
  location: "Downtown",
  books: [
    {
      title: "JavaScript Basics",
      author: "John Doe",
      copies: 5
    },
    {
      title: "Advanced Python",
      author: "Jane Smith",
      copies: 3
    }
  ]
};

console.log(library.books[0].title);  
console.log(library.books[1].author);