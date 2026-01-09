const BASE_URL = "https://me-api-backend-vtyh.onrender.com";

function App() {
  const [profile, setProfile] = React.useState(null);
  const [skill, setSkill] = React.useState("");
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${BASE_URL}/me`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const searchProjects = () => {
    if (!skill.trim()) {
      setProjects([]);
      return;
    }

    fetch(`${BASE_URL}/projects?skill=${encodeURIComponent(skill)}`)
      .then(res => {
        if (!res.ok) return [];
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
      })
      .catch(() => setProjects([]));
  };

  return React.createElement(
    "div",
    { className: "max-w-xl mx-auto bg-white p-6 rounded shadow" },

    React.createElement(
      "h1",
      { className: "text-2xl font-bold mb-4" },
      "My Profile"
    ),

    loading && React.createElement("p", null, "Loading profile..."),

    profile && React.createElement(
      "div",
      { className: "mb-6" },
      React.createElement("p", { className: "font-medium" }, profile.title || ""),
      React.createElement("p", { className: "text-sm text-gray-600" }, profile.description || ""),
      React.createElement(
        "p",
        { className: "text-sm mt-2" },
        "Skills: ",
        (profile.skills || []).join(", ")
      )
    ),

    React.createElement(
      "div",
      { className: "mb-4" },
      React.createElement("input", {
        className: "border p-2 w-full mb-2",
        placeholder: "Search projects by skill",
        value: skill,
        onChange: e => setSkill(e.target.value)
      }),
      React.createElement("button", {
        className: "bg-blue-600 text-white px-4 py-2 rounded w-full",
        onClick: searchProjects
      }, "Search")
    ),

    React.createElement(
      "ul",
      null,
      projects.length === 0
        ? React.createElement("li", { className: "text-sm text-gray-500" }, "No projects found")
        : Array.isArray(projects) && projects.map((p, i) =>
            React.createElement(
              "li",
              { key: i, className: "mb-2" },
              React.createElement("strong", null, p.title),
              " – ",
              p.description || ""
            )
          )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root"))
  .render(React.createElement(App));
