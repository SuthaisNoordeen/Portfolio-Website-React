const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Good-Health-Well-Being
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A comprehensive project focused on promoting good health and well-being, emphasizing the importance of physical, mental, and emotional health. This project provides tools, insights, or systems designed to help individuals lead a happy, healthy, and fulfilling life by addressing challenges and fostering a balanced lifestyle.
            </p>
            <a
              href="https://github.com/SuthaisNoordeen/Good-Health-Well-Being"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Theater-Booking-Management-System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A Java-based Theater Booking Management System implementing fundamental programming concepts, arrays, object-oriented programming principles, and data structures and algorithms. This system allows users to manage and book theater seats efficiently.
            </p>
            <a
              href="https://github.com/SuthaisNoordeen/Theater-Booking-Management-System"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              DiceGame-20x2
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A console-based Python game where a human competes against a computer to reach the 20th block. The game includes dice rolls, black holes, and interactive gameplay. It saves session results in text files for future reference and demonstrates clean algorithmic implementation.
            </p>
            <a
              href="https://github.com/SuthaisNoordeen/DiceGame-20x2"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

         
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* CoderLobby Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              GameInt-ColorGuessingGame
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A Python-based interactive color deduction game where players guess a 4-digit color code using logic. Includes features like random code generation, validation, and an 8-attempt limit. Developed as part of the coursework for Introduction to Programming in Python
            </p>
            <a
              href="https://github.com/SuthaisNoordeen/GameInt-ColorGuessingGame"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Cinerate Project */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Real_Time_Booking
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A Java-based real-time event ticketing system implementing advanced producer-consumer patterns. This project utilizes object-oriented programming principles, multi-threading, and synchronization to handle concurrent ticket releases and purchases. It features robust logging, error handling, and optional advanced functionalities like priority customers and real-time analytics
            </p>
            <a
              href="https://github.com/SuthaisNoordeen/Real_Time_Booking-Suthais_Noordeen"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Portfolio-Website-React
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A personal portfolio website built using React, JavaScript, CSS, and HTML. This project showcases my profile, projects, and contact information, featuring a clean and responsive design. The website is designed to provide an interactive and professional representation of my skills and accomplishments.
            </p>
            <a
              href="https://weatherfixpro.netlify.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Landing Pages Bundle */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              href="https://github.com/AMOHAMMEDIMRAN/Amazing-Landing-Page"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
