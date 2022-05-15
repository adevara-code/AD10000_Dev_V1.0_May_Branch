/**
 * 
 */
package com.ad.adsoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ad.adsoft.model.Referrals;

/**
 * @author ashok
 *
 */
@Repository
public interface ReferralsRepository extends JpaRepository<Referrals, Long> {

}
