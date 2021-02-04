// Copied from neos-ui
export interface NodeChild {
    contextPath: NodeContextPath;
    nodeType: NodeTypeName;
}
export type NodeTypeName = string;
export type NodeContextPath = string;
export type DimensionPresetName = string;
export type DimensionValue = string;
export interface DimensionCombination {
    [propName: string]: DimensionValue[];
}
export interface DimensionPresetCombination {
    [propName: string]: DimensionPresetName;
}
export type NodePolicy = Readonly<{
    disallowedNodeTypes: NodeTypeName[];
    canRemove: boolean;
    canEdit: boolean;
    disallowedProperties: string[];
}>;

export interface Node {
    contextPath: NodeContextPath;
    name: string;
    identifier: string;
    nodeType: NodeTypeName;
    label: string;
    isAutoCreated: boolean;
    depth: number;
    children: NodeChild[];
    matchesCurrentDimensions: boolean;
    properties: {
        [propName: string]: any;
    };
    isFullyLoaded: boolean;
    uri: string;
    parent: NodeContextPath;
    policy?: NodePolicy;
    dimensions?: DimensionPresetCombination;
    otherNodeVariants?: DimensionPresetCombination[];
}
