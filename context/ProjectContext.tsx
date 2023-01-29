import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface ChildrenProps {
  children: JSX.Element;
}
export interface ProjectContextInterface {
  projectId: string | null;
  setProjectId: Dispatch<SetStateAction<string | null>>;
}
export const ProjectContext = createContext<ProjectContextInterface>({
  projectId: null,
  setProjectId: () => {},
});

export const ProjectProvider: React.FC<ChildrenProps> = ({
  children,
}: ChildrenProps) => {
  const [projectId, setProjectId] = useState<string | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        projectId,
        setProjectId,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
