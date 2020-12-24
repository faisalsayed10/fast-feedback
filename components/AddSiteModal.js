import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Button,
  FormLabel,
  Input,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const toast = useToast();
  const auth = useAuth();

  const { handleSubmit, register } = useForm();

  const onCreate = ({ site, url }) => {
    createSite({
      author: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url
    });
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    onClose();
  };

  return (
    <>
      <Button fontWeight="medium" maxW="200px" onClick={onOpen}>
        Add Your First Site
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreate)}>
          <ModalHeader fontWeight="bold">Add site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My site"
                name="site"
                ref={register({ required: 'Required' })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://example.com"
                name="url"
                ref={register({ required: 'Required' })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button backgroundColor="#99FFFE" color="#194D4C" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
