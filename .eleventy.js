/* Config file */
module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("prestations", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/prestations/*.md");
  })

  eleventyConfig.addCollection("photoAll", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md");
  })

  eleventyConfig.addCollection("photoBapteme", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Baptême");
  })

  eleventyConfig.addCollection("photoBebe", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Bébé");
  })

  eleventyConfig.addCollection("photoCouple", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Couple");
  })

  eleventyConfig.addCollection("photoFamille", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Famille");
  })

  eleventyConfig.addCollection("photoGrossesse", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Grossesse");
  })

  eleventyConfig.addCollection("photoMariage", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Mariage");
  })

  eleventyConfig.addCollection("photoPortrait", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.category == "Portrait");
  })
  eleventyConfig.addWatchTarget("./src/scss/");

  // Ce dossier est cloné lors du build
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

  return { 
    dir: {
        input: "src",
        output: "public"
    }
  }
};