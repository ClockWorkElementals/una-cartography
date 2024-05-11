import ReactFlow, { Controls, Panel } from "reactflow";
import { shallow } from "zustand/shallow";
import useStore from "./store";
import MindMapEdge from "./MindMapEdge";
import MindMapNode from "./MindMapNode";
import "reactflow/dist/style.css";

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
});

const nodeTypes = {
    mindmap: MindMapNode,
};

const edgeTypes = {
    mindmap: MindMapEdge,
};

const nodeOrigin = [0.5, 0.5];

function Flow() {
    const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
        selector,
        shallow
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeOrigin={nodeOrigin}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
        >
            <Controls showInteractive={false} />
            <Panel position="top-left">React Flow Mind Map</Panel>
        </ReactFlow>
    );
}

export default Flow;
