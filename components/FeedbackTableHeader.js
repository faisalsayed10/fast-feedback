import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from '@chakra-ui/react';

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage>Feedback</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>All Feedbacks</Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
