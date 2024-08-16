import { ButtonGroup, Button } from "@nextui-org/react";
import { IconTree } from "./icons";
import { randomIntegerInRange } from "../_utils/utilityFunctions";

// size is optional. md w-16 h-16 is the default value.
export const Tree = ({ size }: { size?: "xs" | "sm" | "md" | "lg" }) => {
    let classes = "bg-transparent text-green-300 "
    if (size) {
        switch (size) {
            case "xs":
                classes += "w-8 h-8"
                break;
            case "sm":
                classes += "w-12 h-12"
                break;
            case "md":
                classes += "w-16 h-16"
                break;
            case "lg":
                classes += "w-20 h-20"
                break;
            default:
                classes += "w-16 h-16" // Default
                break;
        }
    } else {
        classes += "w-16 h-16" // Default
    }
    // console.log(classes)

    return (
        <ButtonGroup isDisabled>
            <Button isIconOnly radius="full" className={classes}>
                <IconTree className="w-full h-full" />
            </Button>
        </ButtonGroup>
    );
};

// Creates trees with array of sizes
export function createTrees(treeSizeArray: ("xs" | "sm" | "md" | "lg")[]) {
    let trees = []
    for (let i = 0; i < treeSizeArray.length; i++) {
        const iconTree = <Tree size={treeSizeArray[i]} key={i} />
        trees.push(iconTree)
    }
    return treeSizeArray ? (
        trees
    ) : (
        null
    )
}

export function createRandomizedTreeGroup(treeSize: 1|2|3|4|5|6){
    let trees = []
    let randomInteger;
    let randomSize:"xs" | "sm" | "md" | "lg" = "md"
    for (let i = 0; i < treeSize; i++) {
        randomInteger = randomIntegerInRange(1,4);
        switch(randomInteger){
            case 1: randomSize = "xs"; break;
            case 2: randomSize = "sm"; break;
            case 3: randomSize = "md"; break;
            case 4: randomSize = "lg"; break;
        }
        const iconTree = <Tree size={randomSize} key={i} />
        trees.push(iconTree)
    }
    return trees
}