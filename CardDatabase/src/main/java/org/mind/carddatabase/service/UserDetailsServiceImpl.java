package org.mind.carddatabase.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mind.carddatabase.domain.User;
import org.mind.carddatabase.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User.UserBuilder;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log4j2
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    // AuthenticationManager의 인증 과정에서 호출됨
    // 이곳에서는 테이블의 사용자가 있는지를 확인하고,
    // 사용자 username, pw, role을 넣어줘야 함
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("loadUserByUsername" + username);
        Optional<User> user = userRepository.findByUsername(username);

        UserBuilder builder = null;

        // User 테이블에 사용자의 username이 존재
        if(user.isPresent()) {
            // username, password, role을 builder에 전달
            User currentUser = user.get();
            builder = org.springframework.security.core.userdetails.User.withUsername(username);
            builder.password(currentUser.getPassword());
            builder.roles(currentUser.getRole());
        } else {
            throw new UsernameNotFoundException("User not found : " + username);
        }
        return null;
    }
}