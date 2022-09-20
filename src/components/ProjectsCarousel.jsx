import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

export const ProjectsCarousel = ({ repoArr }) => {
  if (!repoArr) return null;

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      {repoArr.map((repo) => (
        <SwiperSlide className="repo_container">
          <a className="repo_link" target="__blank" href={repo.html_url}>
            {repo.name}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
