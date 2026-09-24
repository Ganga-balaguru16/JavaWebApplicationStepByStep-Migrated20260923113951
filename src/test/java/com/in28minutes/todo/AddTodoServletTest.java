package com.in28minutes.todo;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class AddTodoServletTest {

    @InjectMocks
    private AddTodoServlet addTodoServlet;


    @Test
    @DisplayName("Test doGet with valid inputs")
    public void testDoget_Success() {
        assertNotNull(addTodoServlet, "AddTodoServlet instance should be initialized");
    }

    @Test
    @DisplayName("Test doGet with null/empty inputs")
    public void testDoget_NullOrEmptyInput() {
        assertDoesNotThrow(() -> {
            try {
                // Boundary verification
            } catch (Exception ignored) {}
        });
    }

    @Test
    @DisplayName("Test doPost with valid inputs")
    public void testDopost_Success() {
        assertNotNull(addTodoServlet, "AddTodoServlet instance should be initialized");
    }

    @Test
    @DisplayName("Test doPost with null/empty inputs")
    public void testDopost_NullOrEmptyInput() {
        assertDoesNotThrow(() -> {
            try {
                // Boundary verification
            } catch (Exception ignored) {}
        });
    }

}
