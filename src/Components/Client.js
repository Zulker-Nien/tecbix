import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ib9wcii7",
  dataset: "production",
  useCdn: true,
});
