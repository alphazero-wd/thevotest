import { FC, useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { Theme } from "../../../utils/customTypes";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { FaAngleUp } from "react-icons/fa";

export const CreatePost: FC = () => {
  const [value, setValue] = useState("**I had a great time in New York.**");
  const [colorMode, setColorMode] = useState<Theme>("light");
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagsValue, setTagsValue] = useState("");

  const getThemeFromLocalStorage = (): Theme => {
    const theme = localStorage.getItem("theme");
    return theme && theme in ["light", "dark"] ? (theme as Theme) : "light";
  };

  useEffect(() => {
    if (tagsValue.endsWith(" ")) {
      const isExistingTag = tags.some((tag) => tag === tagsValue.trim());
      if (!isExistingTag) setTags([...tags, tagsValue.trim()]);
      setTagsValue("");
    }
  }, [tagsValue]);

  useEffect(() => {
    setColorMode(getThemeFromLocalStorage());
  }, [colorMode]);

  return (
    <FormControl>
      <Stack
        p="5"
        shadow="md"
        rounded="md"
        spacing="7"
        data-color-mode={colorMode}
      >
        <Stack direction="row" justifyContent="space-between">
          <Heading size="md">Create a Post</Heading>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            bg="transparent"
            color="primary"
            transform={`rotate(${isOpen ? 0 : 180}deg)`}
            aria-label="toggle create post section"
            as={FaAngleUp}
            size="sm"
            _hover={{ bg: "primary", color: "white", cursor: "pointer" }}
          />
        </Stack>

        {/* title input */}
        <Stack spacing="2">
          <FormLabel fontWeight="bold">Title (Required)</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="primary"
            placeholder="e.g. My trip to New York."
          />
          <FormHelperText>
            Keep your title as short and clear as possible.
          </FormHelperText>
        </Stack>

        {/* body markdown */}
        {isOpen && (
          <>
            <Stack spacing="2">
              <FormLabel fontWeight="bold">Body (Optional)</FormLabel>
              <MDEditor
                value={value}
                onChange={(value) => setValue(value || "")}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
                placeholder="Write your thoughts here..."
              />
              <FormHelperText>
                Provide additional information about the topic you want to write
                about.
              </FormHelperText>
            </Stack>
            {/* tags */}
            <Stack spacing="2">
              <FormLabel fontWeight="bold">Tags</FormLabel>
              <Input
                variant="outline"
                focusBorderColor="primary"
                placeholder="e.g. travel, newyork, theusa"
                onChange={(e) => setTagsValue(e.target.value)}
                value={tagsValue}
              />
              <FormHelperText>
                Add up to 5 tags to describe your post.
              </FormHelperText>
              <Stack direction="row">
                {tags.map((tag, i) => (
                  <Tag
                    display="flex"
                    key={i}
                    size="md"
                    borderRadius="full"
                    variant="solid"
                    color="white"
                    bg="primary"
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton
                      onClick={() =>
                        setTags(tags.filter((curTag) => tag !== curTag))
                      }
                    />
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </>
        )}

        {/* submit button */}
        <Button
          type="submit"
          bg="primary"
          color="white"
          display="inline-block"
          w="20%"
          mx="auto"
          _hover={{
            bg: "transparent",
            border: "solid",
            borderColor: "primary",
            color: "primary",
          }}
        >
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
};
