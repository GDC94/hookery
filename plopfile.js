const ComponentType = {
    HOOKS: "hooks",
};

const ComponentFolder = {
    [ComponentType.HOOKS]: "fetching",
};

const StoryPath = {
    [ComponentType.HOOKS]: "Hooks",
};

export default (plop) => {
    plop.setGenerator("component", {
        description: "Create new hook",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "⚡️ Please, enter the hook name:",
            },
        ],
        actions: [
            {
                type: "addMany",
                destination: "src/hooks/{{ComponentFolder ComponentType}}/{{name}}",
                base: "plop-templates/component",
                templateFiles: "plop-templates/component/*.hbs",
            },
        ],
    });
    plop.setHelper("ComponentFolder", (componentType) => ComponentFolder[componentType]);

    plop.setHelper("storyPath", (componentType) => StoryPath[componentType]);
};
