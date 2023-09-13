import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '@/components/layout';
import Wrapper from './styles';
import { AboutInterace } from '@/types';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '@/components/seo';

const About: React.FC<AboutInterace> = ({ location }) => {
  const query: Queries.AboutMeQueryQuery = useStaticQuery(graphql`
    query AboutMeQuery {
      site {
        siteMetadata {
          author {
            name
            realName
            summary
            ps
          }
        }
      }
    }
  `);
  const author: Queries.Author = query.site!.siteMetadata!.author!;
  return (
    <Layout location={location} title="about">
      <Wrapper>
        <section>
          <div>
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={['auto', 'png', 'webp']}
              src="../../images/profile-pic.png"
              width={120}
              height={120}
              quality={95}
              alt="Profile picture"
            />
          </div>
          <div className="emptyPad"></div>
          <div>
            <h3 className="name">
              프론트엔드 개발자 <span className="hl">{author.realName} </span>
              입니다.
            </h3>
          </div>
          <p className="description">
            <p>
              안녕하세요 먼저 움직이는 개발자 이정회 입니다. <br />
              서비스 내 개선의 여지가 있는 부분을 스스로 파악하고, 이를 해결하려
              노력합니다. 주어진 일만 하는 것이 아닌 능동적으로 업무를 진행하며
              사용자들에게 더 나은 경험을 제공하는 것을 가장 큰 목표로 두고
              있습니다.
            </p>
            <p>
              팀원들과 적극적으로 소통하며 함께 문제를 해결하는 것을 큰 가치로
              여깁니다. 다양한 시각에서에서 문제를 바라보고,공유를 통해 동일한
              이슈가 발생되지 않도록 시간낭비를 최소화 하며 개발 프로세스를 보다
              효율적으로 만들 수 있었습니다.
            </p>
            <p>
              최근에는 테스팅 도구,프론트엔트 프레임워크,번들링툴 등에 관심이
              있어, 공부하고 있습니다. 더 나은 개발자가 되기 위해 스스로의
              성장하기 위해 노력하는 것이 중요하다고 생각합니다.
            </p>
            <p>
              저는 이러한 경험을 바탕으로 문제 해결에 적극적으로 참여하며,
              팀원들과 지속적으로 의사소통하며, 함께 성장해나가는 개발자가
              되고자 합니다.
            </p>
          </p>
        </section>
      </Wrapper>
    </Layout>
  );
};

export default About;

export const Head = () => <Seo title="About Me" />;
