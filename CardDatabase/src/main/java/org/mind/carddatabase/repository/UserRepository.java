package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

// User는 Rest Repository에서 제외함
// 이것을 안하면 user 테이블의 정보가 노출됨
@RepositoryRestResource(exported = false)
public interface UserRepository extends JpaRepository<User, Long> {
    // 인증과정에서 해당 username이 테이블에 존재하니?
    Optional<User> findByUsername(String username);
}
