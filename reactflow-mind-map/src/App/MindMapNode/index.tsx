import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

export type NodeData = {
    label: string;
};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
    return (
        <>
            <input defaultValue={data.label} className="w-full" />

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}

export default MindMapNode;
