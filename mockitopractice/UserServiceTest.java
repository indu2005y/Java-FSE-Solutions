package com.mockitopractice;

import static org.mockito.Mockito.*;

import org.junit.Test;

public class UserServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock
        UserRepository mockRepository = mock(UserRepository.class);

        // Inject Mock
        UserService service = new UserService(mockRepository);

        // Call Method
        service.registerUser("Indu");

        // Verify Interaction
        verify(mockRepository).saveUser("Indu");
    }
}