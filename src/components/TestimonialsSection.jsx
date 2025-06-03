import React from 'react';

const StarIcon = ({ filled = true }) => (
  <div className={`${filled ? 'text-[#b7e0b7]' : 'text-[#b8ccb8]'}`} data-icon="Star" data-size="20px" data-weight={filled ? "fill" : "regular"}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d={filled 
          ? "M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
          : "M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
        }
      ></path>
    </svg>
  </div>
);

const ThumbsIcon = ({ type, count }) => (
  <button className="flex items-center gap-2">
    <div className="text-inherit" data-icon={type} data-size="20px" data-weight="regular">
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
        <path
          d={type === "ThumbsUp" 
            ? "M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
            : "M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
          }
        ></path>
      </svg>
    </div>
    <p className="text-inherit">{count}</p>
  </button>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#f9fbf9]">
      <div className="flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: `url("${testimonial.avatar}")` }}
        ></div>
        <div className="flex-1">
          <p className="text-[#111811] text-base font-medium leading-normal">{testimonial.name}</p>
          <p className="text-[#608560] text-sm font-normal leading-normal">{testimonial.date}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < testimonial.rating} />
        ))}
      </div>
      <p className="text-[#111811] text-base font-normal leading-normal">
        {testimonial.text}
      </p>
      <div className="flex gap-9 text-[#608560]">
        <ThumbsIcon type="ThumbsUp" count={testimonial.likes} />
        <ThumbsIcon type="ThumbsDown" count={testimonial.dislikes} />
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Owen Harper',
      date: '2023-08-15',
      rating: 5,
      text: "Alvis Agrochem's products have significantly improved my crop yields. I highly recommend their pesticides.",
      likes: 12,
      dislikes: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjuFUCHq5GS67D2UMm-MVwl8JjRCnPr9-rPpB6MyYROHoVxAEakeaalR6O-nZkN174S3n8SHzvkdMe1CuLZYwBxQyTh8VIN6gNin3-IJUkdRIMC1bKss4QXynBkOCrdf2H55RyySAy8rzrGkNE71HHq__3l9MeUv4Mn7nHFouV9EAUceaMaeT7dXjGakUoFXOsYir9cibiU58HAPjXjw_fidLLuTD0tdA8PRuL4l1JKhMImfbyMSFmmDz67RHVjwFXLQwvO4JEIr4'
    },
    {
      id: 2,
      name: 'Sophia Bennett',
      date: '2023-07-22',
      rating: 4,
      text: 'The fertilizers from Alvis Agrochem are excellent. My crops are healthier and more productive.',
      likes: 8,
      dislikes: 1,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpdfxGzNY7qwSvC3FznkHoOp1bXE1-b4Vis8ZzSDZ46mRjGncuoAmxaFJvzbrv0SBHKANDP7mXQv760iV4C-bpHAJXu62WtfwUy-6Aa-IC8ymYK5TOnrKYne_FrPkyfMaYgnong2jJdw-rTfyxJCUJ855a1bLy2cMApXxP2fEcf4bY3tshiEuXwcfwScSwQqhJCL8-TU55oXeTF9gIzocaqDGdf-k47chPzrY_u-RAkxMLb2fAl8PxQamzDTxkDZk70bPq7dffQWY'
    },
    {
      id: 3,
      name: 'Liam Thompson',
      date: '2023-06-10',
      rating: 5,
      text: "I've been using Alvis Agrochem's herbicides for years, and they always deliver great results. Highly satisfied.",
      likes: 15,
      dislikes: 3,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChPBgnDF4sgR_84Wo94NASfvXLxEU3KijqmyXB6KO1zXEEtDNJUQnAM0n_EuP34p0Ew1n7U6d-YaVat1_SYtXPOVhfp2G6I59NmgJeXQ7nnt--AvEzo2FPlHFueD6VeLvbdmL9sUv76E8mRePG8o_RRSt1Yfz7tGkXtZu2libbG4dUDV6jWyhg4Lw7s_C8aYqppdIQkZpx-cTIYQ8KPZtLcJlAeyjJrr-UPfSfhamn9pnD34eFIJc8HMIxYT33Q9kwlI0mOETBdXc'
    }
  ];

  return (
    <section id="testimonials">
      <h2 className="text-[#111811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customer Testimonials</h2>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-[#f9fbf9] p-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
