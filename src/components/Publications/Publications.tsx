// @Components
import PublicationItem from './PublicationItem';

// @Styles
import { PublicationsContainer } from './Publication.styles';

const Publications = () => {
  return (
    <PublicationsContainer>
      <PublicationItem
        title="A Framework Based on UCD and Scrum for the Software Development Process"
        description="This paper proposes a framework that successfully includes UCD techniques and roles into Scrum, detailing phases, activities and roles that teams should follow. This proposal was tested in a small software project to improve a banking system. The results of this test showed that following the proposed framework improved the software development process in terms of team experience, product usability, and resource efficiency."
        source="SpringerLink"
        date="July 03, 2021"
        url="https://doi.org/10.1007/978-3-030-78221-4_2"
      />
      <PublicationItem
        title="Challenges in Integrating SCRUM and the User-Centered Design Framework: A Systematic Review"
        description="This paper discusses a systematic review that aimed to identify challenges in integrating UCD and Scrum. The analysis revealed common challenges such as neglecting usability and user experience, poor communication between designers and developers, limited resources for upfront Scrum activities, and clients misunderstanding user needs. The study also identified 30 techniques and methodologies as potential solutions"
        source="SpringerLink"
        date="January 05, 2021"
        url="https://doi.org/10.1007/978-3-030-66919-5_6"
      />
    </PublicationsContainer>
  );
};

export default Publications;
