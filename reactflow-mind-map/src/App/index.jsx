import ReactFlow, { Controls, Panel } from "reactflow";
import "../index.css";

function Flow() {
    return (
        <ReactFlow>
            <Controls showInteractive={false} />
            <Panel position="top-left">React Flow Mind Map</Panel>
        </ReactFlow>
    );
}

export default Flow;
